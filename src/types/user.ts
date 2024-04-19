export type TUser = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isEmailVerified: boolean;
    password: string;
    avatar: string;
    domainName: string;
    twitterUsername: string;
    discordUsername: string;
    metamaskAddress: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ProfileDetailsForm = {
    name: string;
    category: string;
    uuid: string;
    description: string;
    price: string;
    socialMedia: {
        platform: string;
        link: string;
    }[];
    banner: File;
}

export type GameDetailsForm = {
    title: string;
    uuid: string;
    developer: string;
    publisher: string;
    recommendedAge: string;
    platform: string[];
    releaseDate: Date;
    overView: string;
    socialMedia: {
        platform: string;
        link: string;
    }[];
    banner: File;
    previewImages: File[];
}