/**
 * External dependencies
 */
import classNames from 'classnames';
import React from 'react';

/**
 * Internal dependencies
 */
import { isFreeTrial, isPlan } from 'lib/products-values';
import Gridicon from 'components/gridicon';

const CheckoutThankYouHeader = React.createClass( {
	propTypes: {
		isDataLoaded: React.PropTypes.bool.isRequired,
		primaryPurchase: React.PropTypes.object,
		selectedSite: React.PropTypes.object
	},

	getHeading() {
		if ( ! this.props.isDataLoaded ) {
			return this.translate( 'Loading…' );
		}

		if ( isFreeTrial( this.props.primaryPurchase ) ) {
			return this.translate( 'Way to go, your 14 day free trial starts now!' );
		}

		return this.translate( 'Thank you for your purchase!' );
	},

	getText() {
		if ( ! this.props.isDataLoaded ) {
			return this.translate( 'Loading…' );
		}

		if ( isFreeTrial( this.props.primaryPurchase ) ) {
			return this.translate( "We hope you enjoy {{strong}}%(productName)s{{/strong}}. What's next? Take it for a spin!", {
				args: {
					productName: this.props.productName
				},
				components: {
					strong: <strong/>
				}
			} );
		} else if ( isPlan( this.props.primaryPurchase ) ) {
			return this.translate( "Your site is now on the {{strong}}%(productName)s{{/strong}} plan. It's doing somersaults in excitement!", {
				args: { productName: this.props.primaryPurchase.productName },
				components: { strong: <strong /> }
			} );
		} else {
			return this.translate(
				"You will receive an email confirmation shortly for your purchase of {{strong}}%(productName)s{{/strong}}. What's next?", {
					args: {
						productName: this.props.productName
					},
					components: {
						strong: <strong/>
					}
				}
			);
		}

		return this.translate( "You will receive an email confirmation shortly. What's next?" );
	},

	render() {
		const classes = {
			'checkout-thank-you-header': true,
			'is-placeholder': ! this.props.isDataLoaded
		}

		return (
			<div className={ classNames( classes ) }>
				<div className="checkout-thank-you-header__content">
					<span className="checkout-thank-you-header__icon">
						<Gridicon icon="trophy" size={ 72 } />
					</span>
					<div className="checkout-thank-you-header__copy">
						<h1 className="checkout-thank-you-header__heading">
							{ this.getHeading() }
						</h1>
						<h2 className="checkout-thank-you-header__text">
							{ this.getText() }
						</h2>
					</div>
				</div>
			</div>
		);
	}
} );

export default CheckoutThankYouHeader;
