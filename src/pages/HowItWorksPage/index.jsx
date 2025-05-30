import { ContentContainer, MainContainer } from "../../components/containers";

import faq from "../../constants/faq.json";

const HowItWorksPage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <div className="flex flex-col gap-4">
          {faq.data.map(
            (el, i) => (
              <div
                key={i}
                className="relative mb-4 md:gap-12 lg:flex-nowrap rounded-2xl border border-[rgb(228,228,231)] px-6 pb-6 pt-2 md:pt-6 xl:justify-between"
              >
                <h6 className="mb-2 text-[28px] font-black text-grey-900">
                  {el.title}
                </h6>
                <div
                  className="whitespace-pre-line leading-[20px]"
                  dangerouslySetInnerHTML={{ __html: el.description }}
                />
              </div>
            ),
          )}
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default HowItWorksPage;
