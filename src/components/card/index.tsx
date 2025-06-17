import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

interface CardProps {
    title?: string;
    subTitle?: string;
}
export const Card: PFC<CardProps> = ({ children, title, subTitle }) => {
    return (
        <>
            <article className="bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300 flex flex-col">
                <Show when={title}>
                    <span className="text-2xl">{title}</span>
                </Show>
                <Show when={subTitle}>
                    <span className="text-lg">{subTitle}</span>
                </Show>
                <div className="text-sm w-full text-gray-400">{children}</div>
            </article>
        </>
    );
};
