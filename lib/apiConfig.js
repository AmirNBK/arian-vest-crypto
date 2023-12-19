import axios from "axios";
import { useEffect, useState } from "react";

export const url = "https://virafundingbackend.darkube.app/api/v1/";
export const base_url = url;

let defaultApi = axios.create({
    baseURL: base_url,
});

if (typeof window !== "undefined") {
    var token = localStorage.getItem("accessToken");
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