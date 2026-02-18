<template>
  <div>
    <button class="bg-amber-500 py-4 px-10 font-mono rounded-xl ring">
      SAve
    </button>
    <p class="diagonal-fractions">1/2 3/4 5/6</p>
    <dl class="w-100 font-serif">
      <dt class="...">Subtotal</dt>
      <dd class="text-right slashed-zero tabular-nums">$100.00</dd>
      <dt class="...">Tax</dt>
      <dd class="text-right slashed-zero tabular-nums">$14.50</dd>
      <dt class="...">Total</dt>
      <dd class="text-right slashed-zero tabular-nums">$114.50</dd>
    </dl>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/*
States:
hover:
focus:
active:
visited:
disabled:
focus-within:
focus-visible:

first:
last:
odd:
even:

nth-3:
nth-last-5:
nth-of-type-4:
nth-last-of-type-3:

only-child:
only-of-type:
first-of-type:
last-of-type:
empty:

required:
invalid:
disabled:
checked:
read-only:
indeterminate:


has-[:focus]
group
group-has-...
group-hover: - состояние основанное на родителях
group/item - имя у группы для вложенных элементов
group-hover/item:visible

peer - состояние основанное на потомках, указывае для потомка от которого следующим э
peer-has-...
peer-focus:
peer-required:
peer/item - имя для потомка
peer-checked/item - состояние для элемента при котором потомок с именем item будет в состоянии checked


not-

after:
before:
placeholder:
file:
marker:
selection:
first-line:
first-letter:
backdrop:

RESPONSIVE
md:
lg:

dark: - prefers-color-scheme
motion-reduce: - prefers-reduced-motion
motion-safe: - prefers-reduced-motion: no-preference
contrast-more: - prefers-contrast
contrast-less: - prefers-contrast
forced-colors: - forced-colors
not-forced-colors: - not-forced-colors
inverted-colors:
pointer-fine: - @media (pointer: fine) {}
pointer-coarse: - @media (pointer: coarse) {}
any-pointer-fine: - @media (any-pointer: fine) {}
any-pointer-coarse: - @media (any-pointer: coarse) {}
portrait: - @media (orientation: portrait) {}
landscape: - @media (orientation: landscape) {}
print:
supports-...:...
not-supports-[display:grid]:flex
starting: - @starting-style

open:
inert:
*:border - будет :is(*:border > *) - примени этот стиль к дочерним элементам



*/
</style>
