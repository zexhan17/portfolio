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
        <a target="_blank" href={p.link}>
            <div
                target="_blank"
                href={p.link}
                transition:fade={{ duration: 2000 }}
                class="my-5 group hover:bg-slate-800/50 rounded-lg p-5 cursor-pointer"
            >
                <h1 class="text-xl font-semibold group-hover:text-teal-300">
                    {p.title}
                </h1>
                <p class="mt-1 mb-3">{p.desc}</p>
                <div class="gap-3 flex flex-wrap">
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
