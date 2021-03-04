<template>
  <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <div class="mt-6 lg:max-w-sm">
          <p class="text-sm text-gray-800">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <p class="mt-4 text-sm text-gray-800">
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <LayoutFooterContact />
      <LayoutFooterSocial />
    </div>
    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p class="text-sm text-gray-600">
        © Copyright 2020 Lorem Inc. All rights reserved.
      </p>
      <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
        </li>
        <li>
          <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
        </li>
        <li>
          <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
        </li>
      </ul>
    </div>
  </div>
</template>