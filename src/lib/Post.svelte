<script>
    import { projects } from "$lib/projects";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let show = $state(false);

    onMount(() => {
        setTimeout(() => {
            show = true;
        }, 1000);
    });
</script>

{#if show}
    <p transition:fade={{ duration: 2000 }} class="px-5">
        Each project in my portfolio represents not just lines of code, but a
        vision brought to life, a challenge met, and a solution elegantly
        crafted. From seamless user interfaces to robust backend architectures,
        every endeavor is a testament to my passion for creating intuitive,
        delightful experiences. Dive into my projects, and you'll find more than
        just codes and designs – you'll discover the heart and soul I pour into
        each line and pixel.
    </p>
{/if}

{#each projects as p}
    {#if show}
        <a target="_blank" rel="noopener noreferrer" href={p.link} class="block my-5">
            <div
                transition:fade={{ duration: 2000 }}
                class="group hover:bg-slate-800/50 rounded-lg p-5 cursor-pointer border border-transparent hover:border-slate-700/50 transition-all duration-300"
            >
                <div class="flex items-center justify-between gap-2 mb-1">
                    <h1 class="text-xl font-semibold group-hover:text-teal-300 flex items-center gap-1.5 transition-colors">
                        <span>{p.title}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-4 h-4 inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </h1>

                    {#if p.isLive}
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Live App
                        </span>
                    {:else if p.badge}
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                            {p.badge}
                        </span>
                    {/if}
                </div>

                <p class="mt-1 mb-3 text-slate-400 leading-relaxed">{p.desc}</p>

                <div class="gap-2 flex flex-wrap">
                    {#each p.tags as tag}
                        <span
                            class="capitalize flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                        >
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>
        </a>
    {/if}
{/each}

<style>
    p {
        color: rgb(148 163 184/1);
    }
</style>
