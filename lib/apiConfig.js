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