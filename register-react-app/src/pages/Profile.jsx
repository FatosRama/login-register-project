export default function Profile(){
    return(
        <div className="w-full min-h-screen bg-[#E5E5E5] ">
            <div className="w-[1300px] h-screen m-auto flex flex-col">
              <section className="w-full h-[72px] py-8 px-10 flex ">
                <div className="w-[233px] h-full flex flex-col gap-3">
                    <h1 className="text-2xl font-medium text-[#3E435D]">Welcome, user!</h1>
                    <p className="text-base font-light text-[#ADA7A7]">Sun, 22 March 2026</p>
                </div>
              </section>
            </div>
        </div>
    )
}