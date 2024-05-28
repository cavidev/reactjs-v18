const deriveKey = async (password, salt) => {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey("raw", enc.encode(password), { name: "PBKDF2" }, false, [
        "deriveKey",
    ]);
    return window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256",
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
};

export async function encryptPassword(password, key) {
    const enc = new TextEncoder();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const cryptoKey = await deriveKey(key, salt);

    const encrypted = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        cryptoKey,
        enc.encode(password)
    );

    const encryptedArray = new Uint8Array(encrypted);
    const encryptedBase64 = btoa(String.fromCharCode.apply(null, encryptedArray));

    return {
        encryptedBase64: encryptedBase64,
        saltBase64: btoa(String.fromCharCode.apply(null, salt)),
        ivBase64: btoa(String.fromCharCode.apply(null, iv)),
    };
}

export async function decryptPassword(key, passwordEncrypted) {
    const { encryptedBase64, saltBase64, ivBase64 } = passwordEncrypted;

    if (!encryptedBase64 || !saltBase64 || !ivBase64) {
        alert("No se encontró ninguna contraseña encriptada.");
        return;
    }

    const encryptedArray = Uint8Array.from(atob(encryptedBase64), (c) => c.charCodeAt(0));
    const salt = Uint8Array.from(atob(saltBase64), (c) => c.charCodeAt(0));
    const iv = Uint8Array.from(atob(ivBase64), (c) => c.charCodeAt(0));

    const cryptoKey = await deriveKey(key, salt);

    try {
        const decrypted = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            cryptoKey,
            encryptedArray
        );

        const dec = new TextDecoder();
        const decryptedPassword = dec.decode(decrypted);
        return { decryptedPassword };
    } catch (e) {
        alert("Not password included");
        console.error(e);
    }
}
