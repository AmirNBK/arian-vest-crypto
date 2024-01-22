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
    phone_number,
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
            phone_number,
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


export const SendTicket = (user, support_type, urgency, subject, platform, metatrader_account, order_number, content, purchased_accounts, file) => {
    const formData = new FormData();
    formData.append('user', user.toString());
    formData.append('support_type', support_type.toString());
    formData.append('urgency', urgency.toString());
    formData.append('subject', subject.toString());
    formData.append('platform', platform.toString());
    formData.append('metatrader_account', metatrader_account.toString());
    formData.append('order_number', order_number.toString());
    formData.append('purchased_accounts', purchased_accounts.toString());
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

export const getAccounts = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}purchased-accounts/accounts/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getPurchasedAccounts = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}panel/profile/purchased-accounts/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getReferal = () => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}introduce-to-friends/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getTickets = (selectedAccount) => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}ticket/list/${selectedAccount}`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getTicketMessage = (id) => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}ticket/retrieve/${id}/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const postTicketMessage = (author, ticket, content, file) => {
    const formData = new FormData();
    formData.append("author", author.toString());
    ticket && formData.append("ticket", ticket.toString());
    formData.append("content", content);
    if (file) {
        formData.append("file", file);
    }
    return defaultApi({
        method: "post",
        data: formData,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
        url: `${base_url}ticket/message/`,
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
export const UpdateProfileInfo = (image, email, address, first_name, last_name, phone_number) => {
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
    if (first_name) {
        formData.append("first_name", first_name);
    }
    if (last_name) {
        formData.append("last_name", last_name);
    }
    if (phone_number) {
        formData.append("phone_number", phone_number);
    }

    return defaultApi({
        method: "put",
        url: `${base_url}panel/profile/`,
        data: formData,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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

export const Wallet = (selectedAccount) => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}wallet/${selectedAccount}/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const profitWithdrawlHistory = (walletId) => {
    return defaultApi({
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}wallet/profit/withdrawal/history/${walletId}/`,
    })
        .then((res) => res)
        .catch((err) => err);
};

export const purchaseAccount = (user, accounts, price, payment_invoice) => {
    const formData = new FormData();
    formData.append("user", user);
    formData.append("accounts", accounts);
    if (price) {
        formData.append("price", price);
    }
    if (payment_invoice) {
        formData.append("payment_invoice", payment_invoice);
    }
    return defaultApi({
        method: "post",
        data: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}purchased-accounts/`,
        "Content-Type": "multipart/form-data",
    })
        .then((res) => res)
        .catch((err) => err);
};



export const withdrawlRequest = (
    user,
    wallet,
    amount,
    description
) => {
    return defaultApi({
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url: `${base_url}wallet/profit/withdrawal/`,
        data: {
            user,
            wallet,
            amount,
            description
        },
    })
        .then((res) => res)
        .catch((err) => err);
};

export const createInvoice = (price_amount, order_id, description) => {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "5SJM1X6-0RH48H0-Q82RNJ2-P80M6EB");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "price_amount": price_amount,
        "price_currency": "usd",
        "order_id": order_id,
        "order_description": description,
        "ipn_callback_url": "https://virafunding.com/success",
        "success_url": "https://virafunding.com/success",
        "cancel_url": "https://virafunding.com/failed"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://api-sandbox.nowpayments.io/v1/invoice", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log('error', error);
            throw error;
        });
};

export const getPaymentInfo = async (paymentId) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "5SJM1X6-0RH48H0-Q82RNJ2-P80M6EB");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`https://api-sandbox.nowpayments.io/v1/payment/${paymentId}`, requestOptions);
        const result = await response.json();

        return result;
    } catch (error) {
        console.error('Error fetching payment info:', error);
        throw error;
    }
};

