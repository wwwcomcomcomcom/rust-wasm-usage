import * as wasm from "rust-wasm";

wasm.greet();

const title = document.createElement("h1");
title.innerHTML = "Hello world";
document.body.appendChild(title);

wasm.append_h1_to_body();