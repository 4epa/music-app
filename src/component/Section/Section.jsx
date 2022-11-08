import styled from "@emotion/styled";

const SectionWrapper = styled.div`
  padding: 15px 75px 45px 75px;
  display: grid;
  gap: 40px;
`;

const SectionTitle = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;
`;

const Section = ({ children, title }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;
