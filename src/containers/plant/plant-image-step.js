// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Actions as nav, ActionConst } from 'react-native-router-flux';
import { plantActions } from '../../redux/actions';
import ImageStep from '../../components/general/image-step';
import { type Plant } from '../../types';

const { plantImageStep } = plantActions;

type PropTypes = {
  plant: Plant,
  onNext: () => any,
};

const PlantImageStep = ({ onNext, plant }: PropTypes) => (
  <ImageStep
      onNext={onNext}
      onSkip={() => nav.plantDetail({ plant, title: plant.name, type: ActionConst.REPLACE })} />
);

const mapDispatchToProps = (dispatch, ownProps: PropTypes) => ({
  onNext: (image) => dispatch(plantImageStep(ownProps.plant.id, image)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(PlantImageStep);
