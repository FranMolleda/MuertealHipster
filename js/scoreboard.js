const ScoreBoard = {
  ctx: undefined,
  score:undefined,

  init: function(ctx, score) {
    this.ctx = ctx;
    this.score = score;
  },

  draw: function(score) {
    this.ctx.fillStyle = 'white'
    this.ctx.font = '60px sans-serif'
    this.ctx.fillText(score, 50, 50)
  }
}