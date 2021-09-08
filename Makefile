.PHONY: all
all: \
	commitlint \
	git-verify-nodiff

include tools/commitlint/rules.mk
include tools/git-verify-nodiff/rules.mk
include tools/semantic-release/rules.mk
