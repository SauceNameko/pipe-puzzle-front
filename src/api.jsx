const api = "https://xs351824.xsrv.jp/api/ranks";

export const getRanks = async () => {
    const res = await fetch(api, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    return data;
}

export const postTime = async (time) => {
    const name = window.prompt("名前を入力してください");
    if (name) {
        const res = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "name": name, "time": time })
        })
        const data = await res.json();
        window.alert(data.message);
    }
}