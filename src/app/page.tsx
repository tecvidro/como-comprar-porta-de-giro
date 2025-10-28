
const content = {
  panelTitle: "Clique na imagem para selecionar o modelo",
  models: [
    { name: "Kit standard: perfis + acessórios", imageUrl: '', id: 1 },
    { name: "Vidro com travessa", imageUrl: '', id: 2 },
    { name: "Vidro com lambril", imageUrl: '', id: 3 },
    { name: "Lambril", imageUrl: '', id: 4 },
    { name: "Vidro com veneziana", imageUrl: '', id: 5 },
    { name: "Veneziana", imageUrl: '', id: 6 },
  ]
}
export default function Home() {
  return (
    <main className="p-4">
      <div className="w-full grid md:grid-cols-2 gap-4">
        <section className="flex flex-col order-2 md:order-1">
          <h2 className="text-orange font-bold">{content.panelTitle}</h2>
          <div>
            {!!content.models && content.models.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="order-1 md:order-2 bg-white rounded-lg border-dashed border-orange border p-4">CONTENT</section>
      </div>

    </main>
  );
}
