<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";

  type SecretariatMember = {
    name: string;
    role: string;
    don?: boolean;
    left?: boolean;
    right?: boolean;
    start?: number;
  };

  const sec: SecretariatMember[] = [
    {
      name: "Saachi Pathak",
      role: "Secretary General",
      don: true,
      left: true,
    },
    {
      name: "Tathya Garg",
      role: "Director General",
      don: true,
      right: true,
    },
    {
      name: "Aarav Sinha",
      role: "Deputy Secretary General",
      don: false,
      left: true,
      start: 2,
    },
    {
      name: "Rohan Kumar",
      role: "Head of OC",
      don: false,
      start: 4,
      right: true,
    },
    {
      name: "Nivika Kumar",
      role: "Co-Head of Delegate Affairs",
      don: false,
      left: true,
    },
    {
      name: "Sloka Pudipeddi",
      role: "Co-Head of Delegate Affairs",
      don: false,
    },
    {
      name: "Joan Boswell",
      role: "Head of Logistics",
      right: true,
    },
    {
      name: "Ruth Shetty",
      role: "Head of Design",
      left: true,
    },
    {
      name: "Simone Ghosh",
      role: "Head of Social Media",
    },
    {
      name: "Vivek Tejas",
      role: "Head of Tech",
      right: true,
    },
  ];
</script>

<div class="w-full flex items-center flex-col gap-4 py-24">
  <h1 class="text-4xl sm:text-8xl font-bold">Secretariat</h1>

  <div
    class="w-full sm:w-2/3 grid grid-cols-2 sm:grid-cols-6 gap-4 px-4 sm:px-0"
  >
    {#each sec as s}
      <div
        class="bg-custom-white col-span-2 shadow-2xl shadow-black/40 rounded border-1 border-dark-blue overflow-hidden"
        class:sm:col-span-3!={s.don}
        class:sm:rounded-l-2xl!={s.left}
        class:sm:rounded-r-2xl!={s.right}
        class:sm:col-start-2={s.start === 2}
      >
        <img
          src="/assets/sec/{s.name.split(' ')[0].toLowerCase()}.jpg"
          alt={s.name}
          class="w-full h-auto aspect-square object-cover mb-4 border-b-1 border-dark-blue"
        />
        <h2
          class="text-center text-lg sm:text-2xl leading-[2] font-semibold"
          class:sm:text-4xl!={s.don}
        >
          {s.name}
        </h2>
        <p class="text-center text-base sm:text-xl">{s.role}</p>
      </div>
    {/each}
  </div>
</div>

<Footer />
