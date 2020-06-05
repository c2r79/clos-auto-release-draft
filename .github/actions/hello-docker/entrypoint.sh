#!/bin/sh

echo "::debug::This is a debug message"
echo "::warning::This is a warning message"
echo "::error::This is an error message"
echo "::add-mask::$1"
echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo 'some filler stuff'
echo 'some Mo stuff'
echo 'some stuff one more again'
echo "::end-group::"

echo "::set-env name=currentStatus::tired"