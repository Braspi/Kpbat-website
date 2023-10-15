<script lang="ts">
    import { _ } from 'svelte-i18n'
    import Fa from 'svelte-fa';
    import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
    import 'leaflet/dist/leaflet.css'
    import { onDestroy, onMount } from 'svelte';
    import { browser } from '$app/environment';

    let map: any;

    let name: string = "";
    let surname: string = "";
    let email: string = "";
    let phone: string = "";
    let message: string = "";

    let privacy: boolean = false;
    let triedToSend: boolean = false;

    onMount(async () => {
        if (browser) {
            const L = await import('leaflet');

            map = L.map(map).setView([48.8992363, 2.1906898], 16);

            // Adds map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([48.8992363, 2.1906898]).addTo(map)
                .bindPopup(`<strong>KP BAT</strong>`);
        }
    })

    onDestroy(async () => {
        if(map) { map.remove() }
    });

    function sendForm() {
        if (privacy) {
            fetch("https://api.kpbat.com/v1/contact", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    phoneNumber: phone,
                    message: message,
                    subject: `${name} ${surname}`
                })
            })
            .catch(error => {
                console.error(error)
            });
        } else {
            triedToSend = true;
        }
    }
</script>

<section class="min-h-screen mb-12" id="contact">
    <div class="m-auto my-10 text-center">
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-light text-dark">{$_("form.header")}</h2>
        <h3 class="text-sm md:text-xl lg:text-2xl text-dark">{$_("form.description")}</h3>
    </div>
    <div class="w-4/5 lg:w-3/5 bg-dark m-auto rounded flex flex-col xl:flex-row">
        <div class="p-3 lg:p-7 flex-[5]">
            <p class="pl-5 text-light text-xl font-semibold">{$_("form.form.title")}</p>
            <p class="pl-5 text-white">{$_("form.form.description")}</p>
            <div class="text-white flex flex-col lg:flex-row p-5 -mx-4 flex-wrap w-full">
                <div class="px-4 my-4 flex-1/2">
                    <label for="name" class="font-semibold text-xs text-light">{$_("form.form.name").toUpperCase()}</label>
                    <input type="text" id="name" class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.name")} bind:value={name} />
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="surname" class="font-semibold text-xs text-light">{$_("form.form.surname").toUpperCase()}</label>
                    <input type="text" id="surname" class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.surname")} bind:value={surname} />
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="email" class="font-semibold text-xs text-light">{$_("form.form.email").toUpperCase()}</label>
                    <input type="text" id="email"class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.email")} bind:value={email} />
                </div>
                <div class="px-4 my-4 flex-1/2">
                    <label for="phone" class="font-semibold text-xs text-light">{$_("form.form.phone").toUpperCase()}</label>
                    <input type="text" id="phone"class="w-full p-2 leading-relaxed text-black h-11 bg-white border-none rounded-md" placeholder={$_("form.form.phone")} bind:value={phone} />
                </div>
                <div class="px-4 my-4 flex-2/2">
                    <label for="message" class="font-semibold text-xs text-light">{$_("form.form.message").toUpperCase()}</label>
                    <textarea id="message" class="w-full p-2 leading-relaxed text-black h-24 bg-white border-none rounded-md resize-none" placeholder={$_("form.form.message")} bind:value={message} />
                </div>
                <div class="px-4 my-4 flex-2/2">
                    <input type="checkbox" bind:checked={privacy} on:change={() => triedToSend = false} />
                    <span class="pl-1 text-sm font-semibold">{$_("form.form.privacy")}
                        <a href="https://docs.google.com/document/d/1bnxOXVHx54XLblR6ZMMVRtHaewmt3CC4fmrkdvxEdEA/edit" class="hover:underline text-hoverColorDark">{$_("form.form.privacy-link")}</a>
                        <span class="text-red-600">*</span>
                    </span>
                </div>
                <div class="px-4 -mt-2 mb-2 text-sm font-semibold flex-2/2 text-red-600" class:hidden={!triedToSend}>
                    {$_("form.form.privacy-notification")}
                </div>
                <div class="px-4 flex-2/2">
                    <button class="text-dark bg-white py-1 px-2 rounded select-none cursor-pointer hover:bg-hoverColor" on:click={() => sendForm()}>{$_("form.form.submit")}</button>
                </div>
            </div>
        </div>
        <div class="p-3 xl:p-7 flex-[4]">
            <p class="pl-1 text-light text-xl font-semibold">{$_("form.details.title")}</p>
            <p class="pl-1 text-white">{$_("form.details.description")}</p>
            <div class="text-white flex flex-row p-5 -mx-4 flex-wrap md:justify-around xl:justify-normal w-full">
                <div class="flex items-center mb-1">
                    <span class="w-16 h-16 bg-mediaColor rounded text-4xl">
                        <Fa icon={faPhone} class="m-auto my-3.5" />
                    </span>
                    <h2 class="ml-3">
                        <p class="text-light">{$_("form.details.phone")}</p>
                        <p class="font-bold">+33 6 38 61 77 95</p>
                    </h2>
                </div>
                <div class="flex items-center mt-1">
                    <span class="w-16 h-16 bg-mediaColor rounded text-4xl">
                        <Fa icon={faEnvelope} class="m-auto my-3.5" />
                    </span>
                    <h2 class="ml-3">
                        <p class="text-light">{$_("form.details.phone")}</p>
                        <p class="font-bold">k.p.batiment@gmail.com</p>
                    </h2>
                </div>
            </div>
            <hr class="w-4/5 m-auto" />
            <div class="w-11/12 h-72 xl:h-[47%] my-5 m-auto rounded-lg relative z-0" bind:this={map}></div>
        </div>
    </div>
</section>
