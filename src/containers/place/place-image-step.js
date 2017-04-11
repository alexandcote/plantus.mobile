// @flow
import React from 'react';
import { Actions as nav, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { placeActions } from '../../redux/actions';
import ImageStep from '../../components/general/image-step';
import { type Place } from '../../types';

const { placeImageStep } = placeActions;

type PropTypes = {
  place: Place,
  onNext: () => any,
};

const PlaceImageStep = ({ onNext, place }: PropTypes) => (
  <ImageStep
      onNext={onNext}
      onSkip={() => nav.placeDetail({ place, title: place.name, type: ActionConst.REPLACE })} />
);

const mapDispatchToProps = (dispatch, ownProps: PropTypes) => ({
  onNext: (image) => dispatch(placeImageStep(ownProps.place.id, image)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(PlaceImageStep);
