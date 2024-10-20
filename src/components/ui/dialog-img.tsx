import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogImage,
  DialogTrigger,
} from "@/components/animation/dialog";

import type { ComponentProps } from "react";

const DialogImg = ({ src, alt, className, style }: ComponentProps<"img">) => (
  <Dialog
    transition={{
      duration: 0.3,
      ease: "easeInOut",
    }}
  >
    <DialogTrigger>
      <DialogImage src={src} alt={alt} className={className} style={style} />
    </DialogTrigger>
    <DialogContainer>
      <DialogContent className="relative">
        <DialogImage
          src={src}
          alt={alt}
          className="h-auto w-[90vw] rounded object-cover lg:h-[90vh] lg:w-auto"
        />
      </DialogContent>
      <DialogClose
        className="fixed right-6 top-6 size-fit rounded-full bg-white p-1"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.1 },
          },
          exit: { opacity: 0, transition: { duration: 0 } },
        }}
      >
        <span className="i-ph-x-circle-fill size-5" />
      </DialogClose>
    </DialogContainer>
  </Dialog>
);

export default DialogImg;
