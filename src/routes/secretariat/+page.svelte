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
      name: "Simone",
      role: "Head of Social Media",
      left: true,
    },
    {
      name: "Ruth Shetty",
      role: "Head of Design",
    },
    {
      name: "Vivek Tejas",
      role: "Head of Tech",
      right: true,
    },
  ];
</script>

<div class="w-full flex items-center flex-col gap-4 py-24">
  <h1 class="text-8xl font-bold">Secretariat</h1>

  <div class="w-2/3 grid grid-cols-6 gap-4">
    {#each sec as s}
      <div
        class="bg-custom-white p-4 shadow-2xl shadow-black/40 rounded"
        class:col-span-3={s.don}
        class:col-span-2={!s.don}
        class:rounded-l-xl!={s.left}
        class:rounded-r-xl!={s.right}
        class:col-start-2={s.start === 2}
      >
        <img
          src="/assets/sec/{s.name.split(' ')[0].toLowerCase()}.jpg"
          alt={s.name}
          class="w-full h-auto rounded-lg aspect-square object-cover mb-4"
        />
        <h2
          class="text-center text-2xl leading-[2] font-semibold"
          class:text-4xl!={s.don}
        >
          {s.name}
        </h2>
        <p class="text-center text-xl">{s.role}</p>
      </div>
    {/each}
  </div>
</div>

<Footer />
