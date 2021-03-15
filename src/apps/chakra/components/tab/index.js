import { Container, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function TabView(){
    return(
      <Container maxW={'6xl'} pb={1}>
          <Tabs>
  <TabList>
    <Tab>內容</Tab>
    <Tab>常見問題</Tab>
    <Tab>其他資料</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Container>
  )
}