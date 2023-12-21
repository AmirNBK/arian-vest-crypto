import axios from "axios";
import { useEffect, useState } from "react";

export const url = "https://virafundingbackend.darkube.app/api/v1/";
export const base_url = url;

let defaultApi = axios.create({
    baseURL: base_url,
});

if (typeof window !== "undefined") {
    var token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
}

export const login = (email_or_username, password) => {
    return defaultApi({
        method: "post",
        url: `${base_url}accounts/login/`,
        data: {
            email_or_username,
            password,
        },
    })
        .then((res) => res)
        .catch((err) => err);
};

export const signUp = (
    email,
    first_name,
    last_name,
    username,
    password,
    password2,
    address,
    description
) => {
    return defaultApi({
        method: "post",
        url: `${base_url}accounts/signup/`,
        data: {
            email,
            first_name,
            last_name,
            username,
            password,
            password2,
            address,
            description
        },
    })
        .then((res) => res)
        .catch((err) => err);
};


export const SendTicket = (user, support_type, urgency, subject, platform, metatrader_account, order_number, content, file) => {
    const formData = new FormData();
    formData.append('user', user.toString());
    formData.append('support_type', support_type.toString());
    formData.append('urgency', urgency.toString());
    formData.append('subject', subject.toString());
    formData.append('platform', platform.toString());
    formData.append('metatrader_account', metatrader_account.toString());
    formData.append('order_number', order_number.toString());
    formData.append('content', content);
    if (file) {
        formData.append("file", file);
    }

    return defaultApi({
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
        url: `${base_url}ticket/`,
        data: formData,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getTicketTypes = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}ticket/support_type/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getTickets = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}ticket/list/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getProfileInfo = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}panel/profile/`,
    })
        .then((res) => res)
        .catch((err) => err);
};
export const UpdateProfileInfo = (image, email, address) => {
    const formData = new FormData();
    if (email) {
        formData.append("email", email);
    }
    if (address) {
        formData.append("address", address);
    }
    if (image) {
        formData.append("image", image);
    }

    return defaultApi({
        method: "put",
        url: `${base_url}panel/profile/`,
        data: formData,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Set content type to form data
        },
    })
        .then((res) => res)
        .catch((err) => err);
};

export const AuthenticationApi = (user_image_with_documents, on_the_national_card, behind_the_national_card, user, first_name, last_name, national_code, phone_number) => {
    const formData = new FormData();
    formData.append('user_image_with_documents', user_image_with_documents);
    formData.append('on_the_national_card', on_the_national_card);
    formData.append('behind_the_national_card', behind_the_national_card);
    formData.append('user', user);
    formData.append('first_name', first_name.toString());
    formData.append('last_name', last_name.toString());
    formData.append('national_code', national_code.toString());
    formData.append('phone_number', phone_number.toString());

    return defaultApi({
        method: "post",
        url: `${base_url}panel/authentication/`,
        data: formData,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    })
        .then((res) => res)
        .catch((err) => err);
};

export const Wallet = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}wallet/`,
    })
        .then((res) => res)
        .catch((err) => err);
};


export const withdrawlRequest = (
    user,
    amount,
    description
) => {
    return defaultApi({
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}wallet/profit-withdrawal/`,
        data: {
            user,
            amount,
            description
        },
    })
        .then((res) => res)
        .catch((err) => err);
};