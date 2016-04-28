module.exports = function (Offer)
{
	Offer.validatesUniquenessOf('identifier');
};
