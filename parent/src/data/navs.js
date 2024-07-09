const navs = [
  {
    name: "Alat",
    url: "#",
    icon: "tool",
    children: [
      {
        name: "Bengkel",
        url: "/alat/bengkel",
      },
      {
        name: "Olahraga",
        url: "/alat/olahraga",
      }
    ]
  },
  {
    name: "Buku",
    url: "#",
    icon: "book",
    children: [
      {
        name: "Novel",
        url: "/buku/novel",
      },
      {
        name: "Puisi",
        url: "/buku/puisi",
      }
    ]
  },
  {
    name: "Cangkir",
    url: "/cangkir",
    icon: "coffee"
  },
  {
    name: "Desain",
    url: "/desain",
    icon: "build"
  }
]

export default navs;
