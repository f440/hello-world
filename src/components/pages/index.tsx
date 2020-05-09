import React, { useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { mediaQuery } from '../../themes'
import { CommandPaletteContext } from '../commandPalette'

import { MessageSection } from '../parts/MessageSection'
import { AboutSection } from '../parts/AboutSection'
import { TechnologyStackSection } from '../parts/TechnologyStackSection'
import { MembersVoiceSection } from '../parts/MembersVoiceSection'
import { WelfareSection } from '../parts/WelfareSection'
import { EntrySection } from '../parts/EntrySection'
import { Footer } from '../parts/Footer'
import { EyeCatchEffects } from '../parts/EyeCatchEffects'

export const IndexPage = () => {
  const { currentCommand } = useContext(CommandPaletteContext)

  return (
    <Wrapper>
      {currentCommand && currentCommand.component}

      <EyeCatchEffects />

      <Contents>
        {/* TODO: Headerコンポーネント化する */}
        <Header>
          <Left>
            <Logo>
              <img src={'/images/logo.svg'} alt="Logo" />
            </Logo>
            <Text>Engineer Recruiting</Text>
          </Left>
          <Right>
            <EntryButton href="">ENTRY</EntryButton>
          </Right>
        </Header>

        <Sections>
          {/* TODO: EyecatchSectionコンポーネント化する */}
          <EyecatchSection>
            <PageTitle>
              <PageTitleImage src="/images/eyecatch/title.svg" alt="歴史に残る模範的なソフトウェアをつくろう" />
            </PageTitle>
            <ButtonWrapper>
              <EntryButtonSp href="">ENTRY</EntryButtonSp>
            </ButtonWrapper>
          </EyecatchSection>
          <MessageSection />
          <AboutSection />
          <TechnologyStackSection />
          <MembersVoiceSection />
          <WelfareSection />
          <EntrySection />
        </Sections>

        <Footer />
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Contents = styled.div`
  position: relative;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin: 0 28px;
  color: #e8e7e5;

  ${mediaQuery.mediumStyle(css`
    margin: 0 15px;
    height: 70px;
  `)}
  ${mediaQuery.smallStyle(css`
    margin: 0 20px;
    height: 50px;

    img {
      width: 148px;
    }
  `)}
`
const Left = styled.div`
  display: flex;
`
const Text = styled.p`
  font-size: 14px;
  border-left: 1px solid #797979;
  margin-left: 18px;
  padding-left: 18px;
  display: flex;
  align-items: center;

  ${mediaQuery.smallStyle(css`
    font-size: 12px;
    margin-left: 14px;
    padding-left: 14px;
  `)}
`
const Logo = styled.div``
const Right = styled.div`
  display: flex;
`
const EntryButton = styled.a`
  background-color: #fff;
  color: #555555;
  font-size: 16px;
  font-weight: bold;
  width: 130px;
  padding: 12px 0;
  text-align: center;
  border-radius: 35px;

  ${mediaQuery.smallStyle(css`
    display: none;
  `)}
`
const PageTitle = styled.h1`
  position: relative;
  line-height: 0;
  padding-top: 25px;

  ${mediaQuery.mediumStyle(css`
    padding-top: 167px;
  `)}
  ${mediaQuery.smallStyle(css`
    padding-top: 123px;
  `)}
`
const ButtonWrapper = styled.div`
  ${mediaQuery.smallStyle(css`
    text-align: center;
    margin-top: 145px;
  `)}
`
const EntryButtonSp = styled.a`
  display: none;

  ${mediaQuery.mediumStyle(css`
    display: none;
  `)}
  ${mediaQuery.smallStyle(css`
    background-color: #fff;
    color: #555555;
    font-size: 20px;
    font-weight: bold;
    width: 185px;
    padding: 16px 0;
    text-align: center;
    border-radius: 35px;
    display: inline-block;
  `)}
`
const PageTitleImage = styled.img`
  display: block;
  margin: 0 auto;
`
const Sections = styled.div`
  max-width: 1160px;
  margin: 0 auto;

  ${mediaQuery.mediumStyle(css`
    padding: 0 35px;
  `)}
  ${mediaQuery.smallStyle(css`
    padding: 0 20px;
  `)}
`
const EyecatchSection = styled.section`
  height: 100vh;
`
