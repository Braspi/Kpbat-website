<script lang="ts">
    import { _ } from 'svelte-i18n'

    // TODO: Add api for sending emails
</script>

<section class="w-screen min-h-screen">
    <div class="w-max m-auto my-10 text-center">
        <h2 class="text-5xl font-light text-dark">{$_("form.header")}</h2>
        <h3 class="text-2xl text-dark">{$_("form.description")}</h3>
    </div>
    <div class="w-3/5 bg-dark m-auto rounded flex">
        <div class="p-7 flex-[5]">
            <p class="text-light text-xl font-semibold">{$_("form.form.title")}</p>
            <p class="text-white">{$_("form.form.description")}</p>
            <div class="text-white flex flex-row p-5 -mx-4 flex-wrap w-full">
                <div class="px-4 my-4 flex-1/2">
                    <label for="name" class="font-semibold text-xs text-light">{$_("form.form.name").toUpperCase()}</label>
                    <input type="text" id="name" class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.name")}>
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="surname" class="font-semibold text-xs text-light">{$_("form.form.surname").toUpperCase()}</label>
                    <input type="text" id="surname" class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.surname")}>
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="email" class="font-semibold text-xs text-light">{$_("form.form.email").toUpperCase()}</label>
                    <input type="text" id="email"class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.email")}>
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="phone" class="font-semibold text-xs text-light">{$_("form.form.phone").toUpperCase()}</label>
                    <input type="text" id="phone"class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.phone")}>
                </div>
                <div class="px-4 my-4 flex-2/2">
                    <label for="message" class="font-semibold text-xs text-light">{$_("form.form.message").toUpperCase()}</label>
                    <textarea id="message" class="w-full p-2 leading-relaxed text-black h-24 bg-white border-none rounded-md resize-none" placeholder={$_("form.form.message")} />
                </div>
                <div class="px-4 my-4 flex-2/2">
                    <input type="checkbox" />
                    <span class="pl-1 text-sm font-semibold">{$_("form.form.privacy")} <a href="https://docs.google.com/document/d/1bnxOXVHx54XLblR6ZMMVRtHaewmt3CC4fmrkdvxEdEA/edit" class="hover:underline text-hoverColorDark">{$_("form.form.privacy-link")}</a></span>
                </div>
                <div class="px-4 flex-2/2">
                    <!-- TODO: Remove "disabled" when api will be finished -->
                    <button class="text-dark bg-white py-1 px-2 rounded select-none cursor-pointer hover:bg-hoverColor" disabled>{$_("form.form.submit")}</button>
                </div>
            </div>
        </div>
        <div class="flex-[4]">
            <hr class="w-4/5 m-auto" />
        </div>
    </div>
</section>
