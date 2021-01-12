import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, View, Text, StyleSheet, Dimensions } from 'react-native';

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
    fontSize: 40,
  },
  sectionList: {
    // height: '50%',
    // flex: 1, //default === flexGrow: 0, flexShrink: 1, flexBasis: 'auto'
    flexBasis: 0, // try to let all the element min size the same
  },
});

const ResultList = ({ resultsSections }) => (
  <SectionList
    style={styles.sectionList}
    contentContainerStyle={styles.contentContainer}
    sections={resultsSections}
    renderItem={(data) => <ResultItem item={data.item} />}
    renderSectionHeader={({ section }) => <RenderSectionTitle title={section.title} />}
  />
);

ResultList.defaultProps = {
  resultsSections: [{ title: '---', data: [] }],
};

ResultList.propTypes = {
  resultsSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          result: PropTypes.number,
          key: PropTypes.number,
        })
      ),
    })
  ),
};

const RenderSectionTitle = ({ title }) => <Text style={styles.title}>{title}</Text>;

RenderSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const ResultItem = ({ item }) => (
  // same as: const {item} = props; or const item = props.item;
  <View>
    <Text style={styles.result}>{String(item.result)}</Text>
  </View>
);

ResultItem.propTypes = {
  item: PropTypes.shape({
    result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    key: PropTypes.number.isRequired,
  }),
};

ResultItem.defaultProps = {
  item: { result: '', key: 0 },
};

export default ResultList;
