import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
  

function MobileNav() {
  return (
    <section className='w-full max-w-[264px]'>

<Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    alt="menu"
    width={36}
    height={36}
    className="cursor-pointer sm:hidden"
    />
  </SheetTrigger>
  <SheetContent side={'left'}>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav