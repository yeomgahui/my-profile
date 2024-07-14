import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen py-10 flex justify-center items-center">
      <div className="container max-w-5xl bg-white shadow-2xl rounded-lg overflow-hidden">
        <section className="p-10 border-b border-gray-200">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            반갑습니다. <br />
            염가희입니다.
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            서울에서 4년차 웹 프론트엔드 엔지니어로 일하고 있으며, 아름다운
            인터페이스와 애니메이션을 구현하는 것을 좋아합니다. 개발자의 가치는
            비즈니스 가치를 구현하는 데서 나온다고 믿습니다. 주도적으로 업무를
            진행할 수 있는 환경을 선호합니다.
          </p>
        </section>

        <section className="p-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="col-span-1 sm:border-r pr-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    스마트스코어
                  </h2>
                  <span className="text-xl text-indigo-600 block">
                    Frontend Developer
                  </span>
                  <span className="block text-sm text-gray-500 mt-2">
                    <time dateTime="2023-08">2023.08</time> - 현재
                  </span>
                </div>
                <div className="col-span-3 space-y-8 border-gray-100">
                  <div className="project">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      골프썸
                    </h3>
                    <span className="block text-sm text-gray-500 mb-3">
                      <time dateTime="2024-07">2024.07</time> - 현재
                    </span>
                    <h4 className="text-xl font-medium text-gray-700">
                      Description
                    </h4>
                    <p className="text-gray-600 mt-2">
                      골프썸이라는 신규 서비스를 개발하고 있습니다.
                    </p>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      What did I do
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                      <li>샌드버드를 이용한 채팅 구현</li>
                    </ul>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      Tech Stack
                    </h4>
                    <p className="text-gray-600 mt-2">Vue2</p>
                  </div>
                  <hr className="my-4 border-gray-200" />
                  <div className="project">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      클럽페이지
                    </h3>
                    <span className="block text-sm text-gray-500 mb-3">
                      <time dateTime="2024-07">2024.07</time> - 현재
                    </span>
                    <h4 className="text-xl font-medium text-gray-700">
                      Description
                    </h4>
                    <p className="text-gray-600 mt-2">
                      클럽페이지라는 신규 서비스를 개발하고 있습니다.
                    </p>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      What did I do
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                      <li>샌드버드를 이용한 채팅 구현</li>
                    </ul>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      Tech Stack
                    </h4>
                    <p className="text-gray-600 mt-2">Vue2</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="col-span-1 sm:border-r pr-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    파인디지털
                  </h2>
                  <span className="text-xl text-indigo-600 block">
                    Frontend Developer
                  </span>
                  <span className="block text-sm text-gray-500 mt-2">
                    <time dateTime="2023-08">2023.08</time> - 현재
                  </span>
                </div>
                <div className="col-span-3  space-y-8 border-gray-100">
                  <div className="project">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      골프썸
                    </h3>
                    <span className="block text-sm text-gray-500 mb-3">
                      <time dateTime="2024-07">2024.07</time> - 현재
                    </span>
                    <h4 className="text-xl font-medium text-gray-700">
                      Description
                    </h4>
                    <p className="text-gray-600 mt-2">
                      골프썸이라는 신규 서비스를 개발하고 있습니다.
                    </p>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      What did I do
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                      <li>샌드버드를 이용한 채팅 구현</li>
                    </ul>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      Tech Stack
                    </h4>
                    <p className="text-gray-600 mt-2">Vue2</p>
                  </div>
                  <hr className="my-4 border-gray-200" />
                  <div className="project">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      클럽페이지
                    </h3>
                    <span className="block text-sm text-gray-500 mb-3">
                      <time dateTime="2024-07">2024.07</time> - 현재
                    </span>
                    <h4 className="text-xl font-medium text-gray-700">
                      Description
                    </h4>
                    <p className="text-gray-600 mt-2">
                      클럽페이지라는 신규 서비스를 개발하고 있습니다.
                    </p>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      What did I do
                    </h4>
                    <ul className="list-disc pl-6 text-gray-600 mt-2">
                      <li>샌드버드를 이용한 채팅 구현</li>
                    </ul>
                    <h4 className="mt-4 text-xl font-medium text-gray-700">
                      Tech Stack
                    </h4>
                    <p className="text-gray-600 mt-2">Vue2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Other Experiences
          </h2>
          <div className="mt-4">
            <h3 className="text-2xl font-medium text-gray-800">
              TypeScript For Korea
            </h3>
            <span className="text-lg text-gray-500 block">Organizer</span>
            <span className="block text-sm text-gray-500 mt-2">
              <time>2024.05</time> - <time>2024.08</time>
            </span>
          </div>
        </section>

        <section className="p-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="text-2xl font-medium text-gray-800">강원대학교</h3>
          </div>
        </section>
      </div>
    </main>
  );
}
