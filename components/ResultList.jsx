import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  title: {
    color: 'orange',
    fontSize: 55,
  },
  itemText: {
    color: '#A72300',
    fontSize: 40,
  },
  itemContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  sectionList: {
    display: 'flex',
    flexBasis: 0, // try to let all the element the same min size
    // width: Dimensions.get('screen').width * 0.9,
  },
});

const ResultItem = ({ item: { result } }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{`${result}, `}</Text>
  </View>
);

const RenderSectionTitle = ({ section: { title } }) => <Text style={styles.title}>{title}</Text>;

const ResultList = ({ resultsSections, keyInt }) => (
  <SectionList
    style={styles.sectionList}
    contentContainerStyle={null}
    sections={resultsSections}
    renderItem={ResultItem}
    renderSectionHeader={RenderSectionTitle}
    // renderSectionFooter={RenderSectionTitle}
    extraData={keyInt}
    horizontal
    stickySectionHeadersEnabled
  />
);

ResultList.defaultProps = {
  resultsSections: [{ title: 'd6', data: [] }],
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
  keyInt: PropTypes.number.isRequired,
};

RenderSectionTitle.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

ResultItem.propTypes = {
  item: PropTypes.shape({
    result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    key: PropTypes.number.isRequired,
  }),
};

ResultItem.defaultProps = {
  item: { result: '', key: 0 },
};

export default connect((state) => ({ keyInt: state.keyInt }))(ResultList);
