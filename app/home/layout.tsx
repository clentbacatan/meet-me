

interface Layout  {
    className:string
    
}

const Layout: Layout = {
    className: "w-full h-screen lg:max-h-min justify-center items-center p-5"
}

export default function HomePageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className={Layout.className}>
        {children}
      </section>
    )
  }