// @flow
import React from 'react';
import { connect } from 'react-redux';
import { plantActions } from '../../redux/actions';
import ImageStep from '../../components/general/image-step';
import { type Plant } from '../../types';
import { Actions as nav, ActionConst } from 'react-native-router-flux';

const { patchPlant } = plantActions;

type PropTypes = {
  plant: Plant,
  onNext: () => any,
};

const PlaceImageStep = ({ onNext, plant }: PropTypes) => (
  <ImageStep
      onNext={onNext}
      onSkip={() => nav.plantDetail({ plant, title: plant.name, type: ActionConst.REPLACE })} />
);

const mapDispatchToProps = (dispatch, ownProps: PropTypes) => ({
  onNext: (image) => dispatch(patchPlant(ownProps.plant.id, { picture: image })),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(PlaceImageStep);
