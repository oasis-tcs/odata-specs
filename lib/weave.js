class Weave {
  /**
   * Called at the beginning of the write phase. */
  async weave() {}
  /**
   * Return code to be output during the write phase at the beginning of a code block. */
  code(line) {}
}

module.exports = Weave;
