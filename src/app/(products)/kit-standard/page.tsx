import { Kit } from "@/src/components/parts/kit";
import { PageHeader } from "@/src/components/parts/pageHeader";

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-center h-full">
      <PageHeader title="Kit standard: perfis + acessórios" subTitle="Kit standard" />

      <div className="flex">
        <Kit title={"Kit Standard: Perfis + acessórios"} />
        <img src="images/standard.png" />
      </div>

      <p> Para a montagem apenas com vidro, você deve pedir apenas o kit de perfis e os acessórios.</p>
    </div>

  )
}

