export class API {
  /**
   * @param {string | undefined} base
   */
  constructor(base) {
    this.base = base || "https://camp-backbone.csie.cool/";
    this.token = {
      access_token: localStorage.getItem("camp2023_access_token") || "",
      refresh_token: localStorage.getItem("camp2023_refresh_token") || "",
      token_type: "Bearer",
    };
  }

  /**
   * Fetch data from server
   * @param {URL | RequestInfo} input
   * @param {RequestInit | undefined} init
   */
  async fetch(input, init, retry = 3) {
    if (typeof input === "string") {
      input = new URL(input, this.base).toString();
    }

    for (let i = 0; i < retry; i++) {
      try {
        init = {
          method: init?.body ? "POST" : "GET",
          ...init,
          headers: {
            ...init?.headers,
            Authorization: this.token.access_token
              ? `${this.token.token_type} ${this.token.access_token}`
              : undefined,
          },
        };

        this.log("fetch", input, init);
        const res = await fetch(input, init);

        if (!res.ok) {
          this.log("not ok");
          let message = res.statusText;

          try {
            const data = await res.clone().json();
            if (data?.message) {
              message = data.message;
            }
          } catch {}

          throw new Error(message);
        }
        this.log("ok");

        await this.update(res.clone());
        return res;
      } catch (err) {
        if (err instanceof Error && err.message.toLowerCase().includes("token expired")) {
          await this.refresh();
        } else {
          this.log("error", err);
        }
      }
    }
  }

  /**
   * Update the internal user state
   * @param {Response} res
   */
  async update(res) {
    try {
      const data = await res.json();
      if (typeof data?.token === "object") {
        this.token = data.token;

        if (this.token.refresh_token) {
          localStorage.setItem("camp2023_refresh_token", this.token.refresh_token);
        }

        if (this.token.access_token) {
          localStorage.setItem("camp2023_access_token", this.token.access_token);
        }

        this.log("token", this.token);
      }
    } catch {}
  }

  async refresh() {
    if (!this.token.refresh_token) {
      this.log("no refresh token");
      return;
    }

    this.log("refreshing access token");
    return this.fetch("/login/refresh", { method: "POST" }, 1);
  }

  log(...args) {
    console.log("api", ...args);
  }
}

export const api = new API();
