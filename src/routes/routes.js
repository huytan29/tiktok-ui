import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";

import { Component } from "react";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload, layout: null},
    { path: '/search', component: Search, layout: null},
    { path: '/live', component: Live },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }