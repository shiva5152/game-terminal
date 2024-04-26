import axios from "axios";
import instance from "@/config/axios";
import type { GameDetailsForm, ProfileDetailsForm, WeaponDetailsForm } from "@/types/user";

export const createGameTournament = async (bodyObj: any) => {

    const { data } = await instance.post(`/tournament`, bodyObj);
    console.log(data);

}

export const updateGameTournament = async (bodyObj: any) => {

    const { data } = await instance.patch(`/tournament/updateTournament`, bodyObj);
    console.log(data);

}

export const addGameDetails = async (gameDetailsData: GameDetailsForm) => {

    const banner = await uploadBanner(gameDetailsData.banner, gameDetailsData.uuid);
    if (!banner) {
        alert("Failed to upload banner");
    };
    const preview = await uploadPreview(gameDetailsData.previewImages, gameDetailsData.uuid);
    if (!preview.length) {
        alert("Failed to upload preview images");
    }
    const bodyObj = {
        ...gameDetailsData,
        banner,
        previewImages: preview
    }
    const { data } = await instance.post(`/game`, bodyObj);
    console.log(data);


}

export const addWeapontails = async (weaponDetailsData: WeaponDetailsForm) => {

    const banner = await uploadBanner(weaponDetailsData.banner, weaponDetailsData.uuid);
    if (!banner) {
        alert("Failed to upload banner");
    };
    const bodyObj = {
        ...weaponDetailsData,
        banner
    }
    const { data } = await instance.post(`/weapon`, bodyObj);
    console.log(data);


}




export const addProfileDetails = async (profileDetailsData: ProfileDetailsForm) => {

    const banner = await uploadImage(profileDetailsData.banner, profileDetailsData.uuid);
    if (!banner) {
        alert("Failed to upload banner");
    };
    const bodyObj = {
        ...profileDetailsData,
        banner
    }
    const { data } = await instance.post(`/profile`, bodyObj);
    console.log(data);


}
const uploadImage = async (banner: File, uuid: string) => {

    try {
        const { data } = await instance.post(`/profile/s3/image`, { fileName: banner.name, uuid });
        if (data) {
            await axios.put(data.url.url, banner, {
                headers: {
                    "Content-Type": banner.type,
                },
            });
        }
        return data.url.s3key as string;
    } catch (error) {
        const e = error as any;
        console.log(e);
        return "";
    }
}

const uploadBanner = async (banner: File, uuid: string) => {

    try {
        const { data } = await instance.post(`/game/s3/banner`, { fileName: banner.name, uuid });
        if (data) {
            await axios.put(data.url.url, banner, {
                headers: {
                    "Content-Type": banner.type,
                },
            });
        }
        return data.url.s3key as string;
    } catch (error) {
        const e = error as any;
        console.log(e);
        return "";
    }
}
const uploadPreview = async (preview: File[], uuid: string) => {

    const previewArr = preview.map((file) => file.name);
    try {
        const { data } = await instance.post(`/game/s3/preview`, { fileNames: previewArr, uuid });
        console.log(data);
        if (data) {
            await Promise.all(data.urls.map(async (data: { url: string, s3key: string }, index: number) => {
                await axios.put(data.url, preview[index], {
                    headers: {
                        "Content-Type": preview[index].type,
                    },
                });
            }));
        }
        return data.urls.map((data: { url: string, s3key: string }) => data.s3key) as string[];
    } catch (error) {
        const e = error as any;
        console.log(e);
        return [];
    }
}