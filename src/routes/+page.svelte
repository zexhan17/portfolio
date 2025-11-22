<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import Post from "$lib/Post.svelte";

    let show = $state(false);
    const str = `I build accessible, inclusive products and digital experiences for the web.`;

    onMount(() => {
        setTimeout(() => {
            show = true;
        }, 1000);
    });

    function typewriter(node, { speed = 2 }) {
        const valid =
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            return;
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: (t) => {
                const i = ~~(text.length * t);
                node.textContent = text.slice(0, i);
            },
        };
    }
</script>

<div class="grid lg:grid-cols-2 container mx-auto">
    {#if show}
        <div class="col-span-1 lg:h-screen relative">
            <div class="m-10 lg:m-24 space-y-5 lg:fixed">
                <div>
                    <h1
                        transition:fly={{ x: -50 }}
                        class="text-4xl font-bold text-white"
                    >
                        Muhammad Zeeshan
                    </h1>
                    <h3
                        transition:fly={{ x: -50, delay: 200 }}
                        class="text-2xl"
                    >
                        Software Engineer
                    </h3>
                    <span transition:typewriter class="block mt-4 max-w-xs">
                        {str}
                    </span>
                </div>
                <!-- icons -->
                <div class="flex gap-4">
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <a
                        transition:fly={{ y: -50, delay: 600 }}
                        href="https://www.linkedin.com/in/muhammad-zeeshan-801448144"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-6 w-6"
                            aria-hidden="true"
                            ><path
                                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                            /></svg
                        >
                    </a>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <a
                        transition:fly={{ y: -50, delay: 650 }}
                        href="https://github.com/zexhan17"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-6 w-6"
                            aria-hidden="true"
                            ><path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            /></svg
                        >
                    </a>
                    <!-- <a
                        transition:fly={{ y: -50, delay: 700 }}
                        href="https://zexhan.hashnode.dev"
                        target="_blank"
                    >
                        <svg
                            class="h-6 w-6 fill-current"
                            viewBox="0 0 200 200"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
                            />
                        </svg>
                    </a> -->
                    <a
                        transition:fly={{ y: -50, delay: 750 }}
                        href="resume.pdf"
                        download>Resume</a
                    >
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="m-10 ml-5 lg:m-24 lg:ml-0">
                <Post />
            </div>
        </div>
    {/if}
</div>

<style>
    span {
        color: rgb(148 163 184/1);
    }
    a:hover {
        color: white;
    }
</style>
