import clsx from "clsx";
import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

interface CardProps {
    tittle?: string;
    shadow?: boolean;
    deepth?: number;
}
export const CardBasic: PFC<CardProps> = ({ children, tittle, shadow }) => {
    return (
        <>
            {/*<!-- Component: Basic card --> */}
            <div
                className={clsx(
                    "overflow-hidden rounded bg-surface1-light dark:bg-surface1-dark text-textColor-light dark:text-textColor-dark",
                    { "shadow-md shadow-slate-200": shadow }
                )}
            >
                <div className="p-6">
                    <Show when={tittle} keyed key={1}>
                        <h3 className="mb-4 text-xl font-medium text-slate-700">{tittle}</h3>
                    </Show>

                    {children}
                </div>
            </div>
            {/*<!-- End Basic card --> */}
        </>
    );
};
