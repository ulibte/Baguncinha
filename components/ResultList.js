import React from 'react'
import PropTypes from 'prop-types'
import { SectionList, View, Text, StyleSheet, Dimensions } from 'react-native'

const ResultList = props => {

  return (
    <SectionList
      style={styles.sectionList}
      contentContainerStyle={styles.contentContainer}
      sections={props.results}
      renderItem={(data) => <ResultItem item={data.item} />}
      renderSectionHeader={({ section }) => (<RenderSectionTitle title={section.title}/>)}
    />

  )
}

const RenderSectionTitle = ({title}) => (
  <Text style={styles.title}>{title}</Text>
)

const ResultItem = ({item})  => {// same as: const {item} = props; or const item = props.item;
  return (
    <View >
      <Text style={styles.result}>{String(item.result)}</Text>
    </View>
  )
}


ResultList.propTypes = {
  results: PropTypes.array,
}

const styles = StyleSheet.create({
  title: {
    color: 'orange',
    fontSize: 55,
    width: Dimensions.get('screen').width * 0.9,
  },
  contentContainer: {
    backgroundColor: 'black',
    alignItems: 'center',    
  },
  result: {
    color: '#A72300',
    fontSize: 40 ,    
  },
  sectionList: {
    //height: '50%',
    //flex: 1, //default === flexGrow: 0, flexShrink: 1, flexBasis: 'auto' 
    flexBasis: 0, //try to let all the element min size the same 
  }
})

export default ResultList


