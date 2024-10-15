import { Config } from "@/config";

const githubAvatarLink = "https://avatars.githubusercontent.com/u/";

const getAvatarLink = (avatar: Config["avatar"]) => {
  switch (avatar.source) {
    case "local":
      return avatar.src;
    case "github":
      return `${githubAvatarLink}${avatar.userId}`;
  }
};

export { getAvatarLink };
