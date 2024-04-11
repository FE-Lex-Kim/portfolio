import styled from "styled-components";
import { ReactComponent as Star } from "../assets/icons/star-alt-3-svgrepo-com.svg";

const Header = () => {
  return (
    <HeaderWidthContainer>
      <StarIcon />
      <Name>Eojin Kim</Name>
      <PageList>
        <PageItem>
          <Link href="#">About me</Link>
        </PageItem>
        <PageItem>
          <Link href="#">Resume</Link>
        </PageItem>
        <PageItem>
          <Link href="#">Portfolio</Link>
        </PageItem>
        <PageItem>
          <Link href="#">Get in touch!</Link>
        </PageItem>
      </PageList>
    </HeaderWidthContainer>
  );
};

const HeaderWidthContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80rem;
  height: 85px;

  padding: 0 1.875rem 0 1.25rem;
  background-color: #344c36; // 나중에 지워주기
`;
const StarIcon = styled(Star)`
  width: 3rem;
  fill: #f2603c;
  margin-right: 0.3125rem;
`;
const Name = styled.h2`
  font-family: "behance";
  font-size: 1.75rem;
  color: #f7f1e3;
  padding-top: 7px;
`;
const PageList = styled.ul`
  display: flex;
  margin-left: auto;
  & > li:nth-of-type(4) > a {
    padding: 5px 15px;

    background-color: #faad1b;
    color: #000;

    border-radius: 20px;
  }
`;

const PageItem = styled.li``;

const Link = styled.a`
  font-size: 1.0625rem;
  margin-left: 3.125rem;
  color: #f7f1e3;
`;

export default Header;
