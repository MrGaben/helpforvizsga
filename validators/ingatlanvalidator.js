const validatorIngatlanupdate = function(req, res, next) {
    const errors = [];
    const { leiras, tehermentes, ar, hirdetesDatuma } = req.body;
    if (leiras && typeof leiras !== 'string') {
      errors.push("szövegnek kell lennie a 'leiras'-nak")
    }
      if(ar && typeof ar !== 'number' || ar < 0) {
        errors.push("a 'ar'-nak szám kell lennie és nem lehet negatív")
      }
      if(tehermentes && typeof tehermentes !== 'boolean') {
        errors.push("vagy igaz, vagy hamisnak kell lennie a 'tehermentes'-nek")
      }
      const date = Date.parse(req.body.hirdetesDatuma);
      if (isNaN(date)) {
        errors.push("A 'hirdetesDatuma' nem érvényes dátum");
      } else {
        const hirdetesDatuma = new Date(date);
        const today = new Date();
        if (hirdetesDatuma > today) {
          errors.push("A 'hirdetesDatuma' nem lehet a mai nap utáni dátum");
        }
      }
      if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    next();
  }

module.exports = { validatorIngatlanupdate };