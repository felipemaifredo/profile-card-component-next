import Image from "next/image"
import circleBGTop from "@/assets/images/bg-pattern-top.svg"
import circleBGBottom from "@/assets/images/bg-pattern-bottom.svg"
import avatarImg from "@/assets/images/image-victor.jpg"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#19a1ad] flex items-center justify-center">

      <div className="w-[320px] h-[340px] rounded-[15px] overflow-hidden bg-white z-9">
        <div className="top-bg h-[130px]">
        </div>
        <div className="flex items-center justify-center">
          <Image src={avatarImg} width={100} height={100} alt="Imagem de avatar" className="border-[5px] border-white rounded-full -mt-[50px]" />
        </div>
        <div className="flex flex-col items-center justify-center py-[10px]">
          <p><strong>Victor Crest</strong> 26</p>
          <p>London</p>
        </div>
        <div className="h-[92px] flex items-center justify-around text-center">
          <div>
            <p><strong>80K</strong></p>
            <p className="small-texts">Followers</p>
          </div>
          <div>
            <p><strong>803K</strong></p>
            <p className="small-texts">Likes</p>
          </div>
          <div>
            <p><strong>1.4K</strong></p>
            <p className="small-texts">Photos</p>
          </div>
        </div>
      </div>

      <Image src={circleBGTop} width={1000} height={1000} alt="background" className="absolute -top-[75%] pointer-events-none" />
      <Image src={circleBGBottom} width={1000} height={1000} alt="background" className="absolute -bottom-[75%] right-0 pointer-events-none z-1" />
    </main>
  )
}
