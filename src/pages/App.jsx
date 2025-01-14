import React from 'react'
import Content from './Content'
import CustomDiv from '../components/CustomDiv'
import About from '../components/About/About'
const App = () => {
  return (
    <Content>
      <div className="w-full">
        <CustomDiv>
          <h1 className="text-5xl text-white text-center mb-4">
            DesignTrix 2025
          </h1>
        </CustomDiv>
        <div>
          <About />
          {/* 3d carousal */}
        </div>
      </div>
    </Content>
  )
}

export default App