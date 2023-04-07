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

try {
  //Signup/email
  const emailRes = await api.fetch("/signup/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "example@gmail.com",
    }),
  });
  if (emailRes) {
    const json = await emailRes.json();
    if (emailRes.status === 200) {
      console.log(json.message);
    } else if (emailRes.status === 400) {
      console.error(json.message);
    } else if (emailRes.status === 403) {
      console.error(json.message);
    } else if (emailRes.status === 500) {
      console.error(json.message);
    }
  }

  //Signup/password
  const passwordRes = await api.fetch("/signup/password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password:
        "9cba73c31ac15d21512382ce6b21e83f8b9fddd31196ff4f54559a8e29add1e3bc4038c86c9bee7512d0d8ea72ec9480580dc677a9f172b46366ecb5198615cc",
    }),
  });
  if (passwordRes) {
    const json = await passwordRes.json();
    if (passwordRes.status === 200) {
      console.log(json.message);
    } else if (passwordRes.status === 400) {
      console.error(json.message);
    } else if (passwordRes.status === 403) {
      console.error(json.message);
    } else if (passwordRes.status === 418) {
      console.error(json.message);
    } else if (passwordRes.status === 500) {
      console.error(json.message);
    }
  }

  //Login/login
  const loginRes = await api.fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "example@gmail.com",
      password:
        "9cba73c31ac15d21512382ce6b21e83f8b9fddd31196ff4f54559a8e29add1e3bc4038c86c9bee7512d0d8ea72ec9480580dc677a9f172b46366ecb5198615cc",
    }),
  });
  if (loginRes) {
    const json = await loginRes.json();
    if (loginRes.status === 200) {
      const token = json.token;
      const account = json.Account;
      console.log(token.access_token);
      console.log(token.refresh_token);
      console.log(token.token_type);
      console.log(account.Role);
      console.log(account.Status);
    } else if (loginRes.status === 400) {
      console.error(json.message);
    } else if (loginRes.status === 401) {
      console.error("string");
    } else if (loginRes.status === 403) {
      console.error(json.message);
    } else if (loginRes.status === 418) {
      console.error(json.message);
    } else if (loginRes.status === 500) {
      console.error(json.message);
    }
  }

  //Login/logout
  const logoutRes = await api.fetch("/login", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh_token: "string",
    }),
  });
  if (logoutRes) {
    const json = await logoutRes.json();
    if (logoutRes.status === 400) {
      console.error(json.message);
    } else if (logoutRes.status === 401) {
      console.error(json.message);
    } else if (logoutRes.status === 403) {
      console.error(json.message);
    }
  }

  //Login/Refresh
  const loginRefreshRes = await api.fetch("/login/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (loginRefreshRes) {
    const json = await loginRefreshRes.json();
    if (loginRefreshRes.status === 200) {
      const token = json.token;
      const account = json.Account;
      console.log(token.access_token);
      console.log(token.refresh_token);
      console.log(token.token_type);
      console.log(account.Role);
      console.log(account.Status);
    } else if (loginRefreshRes.status === 401) {
      console.error(json.message);
    }
  }

  //login/password/reset
  const loginPasswordResetRes = await api.fetch("/login/password/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "example@gmail.com",
    }),
  });
  if (loginPasswordResetRes) {
    const json = await loginPasswordResetRes.json();
    const status = loginPasswordResetRes.status;
    if (status === 200) {
      console.log(json.message);
    } else if (status === 401) {
      console.error(json.message);
    } else if (status === 500) {
      console.error(json.message);
    }
  }

  //Login/password/update
  const loginPasswordUpdateRes = await api.fetch("/login/password/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password:
        "9cba73c31ac15d21512382ce6b21e83f8b9fddd31196ff4f54559a8e29add1e3bc4038c86c9bee7512d0d8ea72ec9480580dc677a9f172b46366ecb5198615ch",
    }),
  });
  if (loginPasswordUpdateRes) {
    const json = loginPasswordUpdateRes.json();
    const status = loginPasswordUpdateRes.status;
    if (status === 200) {
      console.log(json.message);
    } else if (status === 400) {
      console.error(json.message);
    } else if (status === 418) {
      console.error(json.message);
    } else if (status === 500) {
      console.error(json.message);
    }
  }

  //Profile/getProfile
  const profileRes = await api.fetch("/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (profileRes) {
    const json = profileRes.json();
    const status = profileRes.status;
    if (status == 200) {
      const token = json.token;
      const profile = json.Profile;
      console.log(token);
      console.log(profile.Name);
      console.log(profile.Gender);
      console.log(profile.School);
      console.log(profile.BirthDate);
      console.log(profile.ID_Document);
      console.log(profile.ID.Validated);
      console.log(profile.PhoneNumber);
      console.log(profile.FoodType);
      console.log(profile.AllergySource);
      console.log(profile.Diseases);
      console.log(profile.ClothesSize);
      console.log(profile.SelfIntro);
      console.log(profile.Motivation);
      console.log(profile.Lang_Learned);
      console.log(profile.Lang_Mastered);
      console.log(profile.Emergency_ContactName);
      console.log(profile.Emergency_ContactNumber);
      console.log(profile.Emergency_ContactRelationship);
      console.log(profile.Facebook);
      console.log(profile.Github);
      console.log(profile.Discord);
    }
  }

  //Profile/updateProfile
  const profileUpdateData = {
    name: "<name>",
    gender: "<gender>",
    school: "<school>",
    birthDate: "<birthDate>",
    personalId: "<personalId>",
    phoneNumber: "<phoneNumber>",
    bloodType: "<bloodType>",
    fbLink: "<fbLink>",
    parentName: "<parentName>",
    relation: "<relation>",
    parentPhoneNumber: "<parentPhoneNumber>",
    travelHistory: "<travelHistory>",
    foodType: "<foodType>",
    allergySource: "<allergySource>",
    disease: "<disease>",
    clothesSize: "<clothesSize>",
    selfIntro: "<selfIntro>",
    motivation: "<motivation>",
    selfPicture: "<selfPicture>",
    lanlearned: "<lanlearned>",
    lanMaster: "<lanMaster>",
  };
  const profileUpdateRes = await api.fetch("/profile/update", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(profileUpdateData),
  });
  if (profileUpdateRes) {
    const json = profileUpdateRes.json();
    const status = profileUpdateRes.status;
    if (status == 200) {
      const token = json.token;
      const profile = json.Profile;
      console.log(token);
      console.log(profile.Name);
      console.log(profile.Gender);
      console.log(profile.School);
      console.log(profile.BirthDate);
      console.log(profile.ID_Document);
      console.log(profile.ID.Validated);
      console.log(profile.PhoneNumber);
      console.log(profile.FoodType);
      console.log(profile.AllergySource);
      console.log(profile.Diseases);
      console.log(profile.ClothesSize);
      console.log(profile.SelfIntro);
      console.log(profile.Motivation);
      console.log(profile.Lang_Learned);
      console.log(profile.Lang_Mastered);
      console.log(profile.Emergency_ContactName);
      console.log(profile.Emergency_ContactNumber);
      console.log(profile.Emergency_ContactRelationship);
      console.log(profile.Facebook);
      console.log(profile.Github);
      console.log(profile.Discord);
      console.log(json.InvalidData);
      console.log(json.MissingData);
    } else if (status === 400) {
      console.error(json.message);
    } else if (status === 403) {
      console.error(json.message);
    }
  }
} catch (error) {
  console.log(error);
}

// Reference: https://camp-backbone.csie.cool/api/docs/#/Signup/post_signup_email
