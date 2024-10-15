import { ImageResponse } from "next/og";

import { getAvatarLink } from "@/lib/avatar";
import config from "@data/config";

const runtime = "edge";
const size = { width: 64, height: 64 };
const contentType = "image/png";

const { avatar } = config;
const link = getAvatarLink(avatar);

const OwnerAvatar = () =>
  // Next.js Image component is not supported in Open Graph images
  // eslint-disable-next-line @next/next/no-img-element
  new ImageResponse(<img tw="rounded-full" src={link} alt={avatar.alt} />, { ...size });

export { runtime, size, contentType };
export default OwnerAvatar;
