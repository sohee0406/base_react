export default function Ex01() {
  const sns = [
    {
      id: 1,
      name: "네이버",
      dsc: "대한민국 no1 포털 사이트",
      link: "https://www.naver.com",
    },
    {
      id: 2,
      name: "인스타",
      dsc: "사진 기반 SNS",
      link: "https://www.instagram.com",
    },
    {
      id: 3,
      name: "유튜브",
      dsc: "동영상 플랫폼",
      link: "https://www.youtube.com",
    },
    {
      id: 4,
      name: "틱톡",
      dsc: "숏폼 동영상 플랫폼",
      link: "https://www.tiktok.com",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="gap-5 justify-center space-y-2">
        {sns.map((site) => (
          <div key={site.id} className="w-64 p-5 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">{site.name}</h2>
            <p className="mb-3">{site.dsc}</p>

            <a href={site.link}>{site.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
